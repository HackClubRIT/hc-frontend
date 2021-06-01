async function send({ method, path, data }) {
  const fetch = window.fetch;
  const base = process.env.REACT_APP_API_URL;

  const opts = { method, headers: {} };

  if (data) {
    if (!data.type) {
      opts.headers["Content-Type"] = "application/json";
      opts.body = JSON.stringify(data);
    } else if (data.type === "formData") {
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      opts.body = formData;
    }
  }

  if (localStorage.token) {
    opts.headers.Authorization = `Bearer ${localStorage.token}`;
  }

  let fullPath = encodeURI(`${base}/${path}`);
  if (process.env.DEBUG) {
    console.log(method, fullPath);
    console.log(opts);
  }
  const res = await fetch(fullPath, opts);
  const json = await res.json();

  return { res, json };
}

/*
 * Shortcut methods for send
 */
export function get(path) {
  return send({ method: "GET", path });
}

export function del(path, data) {
  return send({ method: "DELETE", path, data });
}

export function post(path, data) {
  return send({ method: "POST", path, data });
}

export function patch(path, data) {
  return send({ method: "PATCH", path, data });
}
