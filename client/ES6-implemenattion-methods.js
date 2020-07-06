const arr = [
  {
    id: 100,
    name: "neha",
    age: 28,
  },
  {
    id: 28,
    name: "nehahhahh",
    age: 28,
  },
  {
    id: 21,
    name: "jain",
    age: 10,
  },
  {
    id: 23,
    name: "nalin",
    age: 33,
  },
  {
    id: 2333,
    name: "nalina",
    age: 33,
  },
  {
    id: 2,
    name: "nalinaaa",
    age: 33,
  },
];

const obj = {
  name: "neha",
  age: "10",
  address: {
    city: {
      name: "delhi",
    },
    number: {
      mbNumber: "11009900999",
      officeNumber: "0009999000",
    },
    code: {
      code: {
        post: "110088",
      },
    },
  },
};

function customAndEs6Map() {
  const myMap = (callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i], i, arr));
    }

    return newArr;
  };

  const dataFromEs6Map = arr.map((elem, index) => {
    return elem.age;
  });

  console.log("dataFromEs6Map", dataFromEs6Map);

  const dataFromMyMap = myMap((elem, index) => {
    return elem.age;
  });

  console.log("dataFromMyMap", dataFromMyMap);
}

function customAndEs6Filter() {
  const dataFromEs6Filter = arr.filter((elem, index) => {
    return elem.age > 30;
  });

  console.log("dataFromEs6Filter", dataFromEs6Filter);

  const myFilter = (callback) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  };

  const dataFromMyFilter = myFilter((elem, index) => {
    return elem.age > 30;
  });

  console.log("dataFromMyFilter", dataFromMyFilter);
}

function customAndEs6Reduce() {
  const dataFromEs6Reduce = arr.reduce((accumulator, elem) => {
    return accumulator + elem.age;
  }, 0);

  console.log("dataFromEs6Reduce", dataFromEs6Reduce);

  const myReduce = (reducerFn, initialValue) => {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = reducerFn(accumulator, arr[i], i, arr);
    }
    return accumulator;
  };

  const dataFromMyReduce = myReduce((accumulator, elem) => {
    return accumulator + elem.age;
  }, 0);

  console.log("dataFromMyReduce", dataFromMyReduce);
}

function cutomGroupByReduce() {
  return arr.reduce((accum, elem) => {
    console.log("elem", elem);
    accum[elem.age] = [...(accum[elem.age] || []), ...[elem]];
    return accum;
  }, {});
}

function cutomGroupByMyReduce() {
  return myReduce((accum, elem) => {
    console.log("elem", elem);
    accum[elem.age] = [...(accum[elem.age] || []), ...[elem]];
    return accum;
  }, {});
}

console.log(cutomGroupByReduce());
// console.log(cutomGroupByMyReduce());

function customSort(key, order) {
  return arr.sort((arr1, arr2) => {
    // if(order === 'ASC') {
    //   if(arr1[key] < arr2[key]){
    //     return -1;
    //   } else if (arr1[key] > arr2[key]) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // } else if (order === 'DSC'){
    //   if(arr1[key] < arr2[key]){
    //     return 1;
    //   } else if (arr1[key] > arr2[key]) {
    //     return -1;
    //   } else {
    //     return 0;
    //   }
    // } else {
    //   return 0;
    // }

    return order === "ASC"
      ? arr1[key] < arr2[key]
        ? -1
        : arr1[key] > arr2[key]
        ? 1
        : 0
      : arr1[key] < arr2[key]
      ? 1
      : arr1[key] > arr2[key]
      ? -1
      : 0;
  });
}

console.log(customSort("id", "ASC"));
console.log(customSort("name", "DSC"));
// console.log(customSort('name', ''));

function myDeepCloneAndEs6() {
  const cloneObj1 = { ...obj }; // not deep clone
  console.log(cloneObj1);

  const cloneObj2 = Object.assign({}, obj); // not deep clone
  console.log(cloneObj2);

  const cloneObj3 = JSON.parse(JSON.stringify(obj)); //deep clone but slow
  console.log(cloneObj3);

  const myDeepClone = (ob) => {
    const cloneOb = {};
    for (let i in ob) {
      cloneOb[i] = typeof ob[i] === "object" ? myDeepClone(ob[i]) : ob[i];
    }
    return cloneOb;
  };

  console.log("myDeepClone", myDeepClone(obj));
}
