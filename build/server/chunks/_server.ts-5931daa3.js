function GET({ url }) {
  let content = { "first-year": 1890, "last-year": 2021 };
  if (url.searchParams.get("bound") == "first") {
    content = 1890;
  }
  if (url.searchParams.get("bound") == "last") {
    content = 2021;
  }
  return new Response(
    JSON.stringify(content),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
}

export { GET };
//# sourceMappingURL=_server.ts-5931daa3.js.map
