//save function that uses localStorage.setItem to persist values across sessions. You are going to eventually use this function to save entered tasks into your roo for weeks!
export function Save(key, value) {
  let valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}

//load function that uses localStorage.getItem to show previously saved values. you will you this to populate list eventually. input key only to run function.
export function Load(key, defaultValue) {
  let valueString = localStorage.getItem(key);
  if (valueString != null) {
    return JSON.parse(valueString);
  }
  return defaultValue;
}

//this is a a function we created to select a random item out of any array your heart's desire!
export function random(myArray) {
  let randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  return randomItem;
}

//function to create the data representation of the roo aka the state of the checkmark
export function createTask(text, done = false) {
  let createTime = new Date();
  return { text, done, createTime };
}

//function that gets all saved tasks in correct sort order by doneness & time
export function sortList(list) {
  function compareListItem(a, b) {
    if (a.done == b.done) {
      return (
        new Date(a.createTime).getTime() - new Date(b.createTime).getTime()
      );
    } else {
      if (a.done == true) {
        return 1;
      } else {
        return -1;
      }
    }
  }
  return list.sort(compareListItem);
}
