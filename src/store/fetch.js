async function send({ method, path, data, session, base }) {
  const fetch = window.fetch;

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

  console.log(opts)

  if (session) {
    // Set the Authorization header
    if (session.TOKEN) {
      if (session.TOKEN.includes("Bearer")) {
        opts.headers["Authorization"] = session.TOKEN;
      } else {
        opts.headers["Authorization"] = `Bearer ${session.TOKEN}`;
      }
    }
  }

  let fullPath = encodeURI(`${base}/${path}/`);
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
export function get(base, path, session) {
  return send({ method: "GET", path, session, base });
}

export function del(base, path, data, session) {
  return send({ method: "DELETE", path, data, session, base });
}

export function post(base, path, data, session) {
  return send({ method: "POST", path, data, session, base });
}

export function patch(base, path, data, session) {
  return send({ method: "PATCH", path, data, session, base });
}
