import { defineConfig } from 'cypress'
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'
import CDP from 'chrome-remote-interface'
import Debug from 'debug'

const debug = Debug('cypress:server:protocol')

function ensureRdpPort(args) {
  const existing = args.find((arg) => arg.slice(0, 23) === '--remote-debugging-port')

  if (existing) {
    return Number(existing.split('=')[1])
  }

  const port = 40000 + Math.round(Math.random() * 25000)

  args.push(`--remote-debugging-port=${port}`)

  return port
}

async function activatePseudoClass(pseudoClass: string, selector: string) {
  debug(`activate ${pseudoClass} pseudo`)

  client =
    client ||
    (await CDP({
      port,
    }))

  await client.DOM.enable()
  await client.CSS.enable()

  // as the Window consists of two IFrames, we must retrieve the right one
  const allRootNodes = await client.DOM.getFlattenedDocument()

  const isIframe = (node) => {
    return node.nodeName === 'IFRAME' && node.contentDocument
  }

  const filtered = allRootNodes.nodes.filter(isIframe)

  // The first IFrame is our App
  const root = filtered[0].contentDocument

  const { nodeId } = await client.DOM.querySelector({
    nodeId: root.nodeId,
    selector,
  })

  return client.CSS.forcePseudoState({
    nodeId,
    forcedPseudoClasses: [pseudoClass],
  })
}

let port = 0
let client: CDP.Client | null = null

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)

      on('before:browser:launch', (browser, launchOptionsOrArgs) => {
        debug('browser launch args or options %o', launchOptionsOrArgs)
        const args = Array.isArray(launchOptionsOrArgs)
          ? launchOptionsOrArgs
          : launchOptionsOrArgs.args

        port = ensureRdpPort(args)
        debug('ensureRdpPort %d', port)
        debug('Chrome arguments %o', args)
      })

      on('task', {
        resetCRI: async () => {
          if (client) {
            debug('resetting CRI client')
            await client.close()
            client = null
          }

          return Promise.resolve(true)
        },
        activatePrintMediaQuery: async () => {
          debug('activatePrintMediaQuery')

          client =
            client ||
            (await CDP({
              port,
            }))

          return client.send('Emulation.setEmulatedMedia', {
            media: 'print',
          })
        },
        activateHoverPseudo: async ({ selector }) => {
          return activatePseudoClass('hover', selector)
        },
        activateActivePseudo: async ({ selector }) => {
          return activatePseudoClass('active', selector)
        },
        activateFocusVisiblePseudo: async ({ selector }) => {
          return activatePseudoClass('focus-visible', selector)
        },
      })
    },
  },
})
