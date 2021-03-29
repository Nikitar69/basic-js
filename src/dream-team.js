const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let teamName = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      teamName.push(members[i].match(/[a-zA-Z]/)
        .join('')
        .toUpperCase()
      );

    }
  }

  teamName.sort();
  return teamName.join('');;
};
