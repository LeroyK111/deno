const scope = import.meta.url.slice(-7) === "#worker" ? "worker" : "main";

console.log(scope, Deno.HttpClient);
console.log(scope, Deno.createHttpClient);

if (scope === "worker") {
  postMessage("done");
} else {
  const worker = new Worker(`${import.meta.url}#worker`, { type: "module" });
  worker.onmessage = () => Deno.exit(0);
}
