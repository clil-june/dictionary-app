exports.handler = async function (event) {
  const word = (event.queryStringParameters && event.queryStringParameters.word || "").trim();

  if (!word) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "A word query is required." })
    };
  }

  try {
    const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word);
    const response = await fetch(apiUrl, {
      headers: { Accept: "application/json" }
    });
    const body = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300"
      },
      body: body
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "The dictionary service could not be reached. Please try again."
      })
    };
  }
};
