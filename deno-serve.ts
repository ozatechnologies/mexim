import { serveDir } from "https://deno.land/std@0.208.0/http/file_server.ts";

const port = 3000;

Deno.serve(
  { port },
  (req: Request) => {
    const url = new URL(req.url);
    
    // For all routes, try to serve from client/dist
    // This enables client-side routing (React Router)
    return serveDir(req, {
      fsRoot: "client/dist",
      showIndex: true,
      showDirListing: false,
      enableCors: true,
    });
  }
);

console.log(`Server running at http://localhost:${port}`);
