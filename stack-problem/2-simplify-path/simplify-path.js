/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];

  for (let dir of path.split("/")) {
    if (dir === "" || dir === ".") continue;
    if (dir === "..") {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return "/" + stack.join("/");
};
// const data = "/home/";
// const data = "/home//foo/";
// const data = "/home/user/Documents/../Pictures";
// const data = "/../";
// const data = "/.../a/../b/c/../d/./"; // => "/.../b/d"
const data = "/a/./b/../../c/";

console.log(simplifyPath(data));
