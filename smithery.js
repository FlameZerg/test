import { createStatelessServer } from '@smitherysdkserverstateless.js'
import { McpServer } from @modelcontextprotocolsdkservermcp.js

 Create your MCP server function
function createMcpServer({ config }) {
   Create and return a server instance
   httpsgithub.commodelcontextprotocoltypescript-sdktab=readme-ov-file#core-concepts
  const mcpServer = new McpServer({
    name My App,
    version 1.0.0
  })

   ...
  
  return mcpServer.server
}

 Create the stateless server using your MCP server function.
createStatelessServer(createMcpServer)
  .app
  .listen(process.env.PORT  3000)