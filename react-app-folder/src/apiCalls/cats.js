import urls from "./urls";

const URL = urls.backendServer() + "/cats";

export function getAllCats() {
  return fetch(URL).then((response) => response.json());
}

export function addCat({ name, age, adopted }) {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, age, adopted }),
  });
}

export function deleteCat(id) {
  const url = URL + "/" + id;

  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function updateCat(id, name, age, adopted) {
  const url = URL + "/" + id;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, age, adopted }),
  });
}
