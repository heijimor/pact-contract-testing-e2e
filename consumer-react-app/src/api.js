export const fetchUser = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Ensure this header is included
    },
  });
  return await response.json();
};
