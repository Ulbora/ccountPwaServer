

var getUserEmail = function () {
    var rtn = "";
    var cname = "email";
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            rtn = c.substring(name.length, c.length);
        }
    }
    return rtn;
}

var setUserEmail = function (val) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "email" + "=" + val + ";" + expires + ";path=/";
}



var getUserPw = function () {
    var rtn = "";
    var cname = "pw";
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            rtn = c.substring(name.length, c.length);
        }
    }
    return rtn;
}

var setUserPw = function (val) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "pw" + "=" + val + ";" + expires + ";path=/";
}

var calDateValue = "";
var setCaloryDateValue = function (val) {
    calDateValue = val;
}
var getCalDateValue = function () {
    return calDateValue;
}

var calCatValue = "";
var setCatValue = function (val) {
    calCatValue = val;
}



var getCatValue = function () {
    return calCatValue;
}

var get_calories_by_day;
var setCaloriesByDay = function (fn) {
    get_calories_by_day = fn;
}
var getCaloriesByDay = function () {
    get_calories_by_day("ken");
}

// var get_food_by_day;
// var setFoodByDay = function (fn) {
//     get_food_by_day = fn;
// }
// var getFoodByDay = function () {
//     get_food_by_day();
// }

var login;
var setLogin = function (fn) {
    login = fn;
}

var loginScreen = function () {
    login();
}

//login
var user_login;
var setLoginUser = function (fn) {
    user_login = fn;
}
var loginUser = function () {
    console.log("in login");
    var email = document.getElementById("email").value;
    console.log(email);
    var pw = document.getElementById("password").value;
    console.log(pw);
    user_login();
}

//change pw

var change_pw_screen;
var setChangePwScreen = function (fn) {
    change_pw_screen = fn;
}

var changePwScreen = function () {
    change_pw_screen();
}



//change pw

var change_pw;
var setChangePw = function (fn) {
    change_pw = fn;
}

var changePassword = function () {
    change_pw();
}





//register

var register_screen;
var setRegisterScreen = function (fn) {
    register_screen = fn;
}

var registerScreen = function () {
    register_screen();
}



//register

var register;
var setRegister = function (fn) {
    register = fn;
}

var registerUser = function () {
    register();
}



//register

var food_screen;
var setFoodScreen = function (fn) {
    food_screen = fn;
}

var foodScreen = function () {
    food_screen();
}



//new food
var new_food;
var setNewFood = function (fn) {
    new_food = fn;
}

var addFood = function () {
    new_food();
}


// food item

var food_item_screen;
var setFoodItemScreen = function (fn) {
    food_item_screen = fn;
}

var savedFoodId;
var savedFoodName;
var sevedFoodCals;
var foodItemScreen = function (id, name, cals) {
    savedFoodId = id;
    savedFoodName = name;
    sevedFoodCals = cals;
    food_item_screen();
}

var getSavedFoodId = function () {
    return savedFoodId;
}

var getSavedFoodName = function () {
    return savedFoodName;
}

var getSevedFoodCals = function () {
    return sevedFoodCals;
}

var deleteFood = function () {
    var r = confirm("Delete this Food?");
    if (r == true) {
        // txt = "You pressed OK!";
        deleteExistingFood();
    }
}


//update food

var update_food;
var setFoodUpdate = function (fn) {
    update_food = fn;
}

var updateFood = function () {
    update_food();
}




//new food

var food_calory_screen;
var setAddCalories = function (fn) {
    food_calory_screen = fn;
}

var addCaloriesScreen = function () {
    food_calory_screen();
}



//new food

var del_food;
var setDeleteFood = function (fn) {
    del_food = fn;
}

var deleteExistingFood = function () {
    del_food();
}


// //new food
var add_calory_screen;
var setAddCaloryScreen = function (fn) {
    add_calory_screen = fn;
}

var addCaloriesByCategoryScreen = function () {
    add_calory_screen();
}



// //new food
var add_calory_screen2;
var setAddCaloryScreen2 = function (fn) {
    add_calory_screen2 = fn;
}

var addCaloriesByCategoryScreen2 = function () {
    add_calory_screen2();
}


// //new food
var add_food_calories;
var setAddFoodCalories = function (fn) {
    add_food_calories = fn;
}

var calariesIdToAdd;
var calariesAddDate;
var addCaloriesForDay = function (id, dt) {
    calariesIdToAdd = id;
    calariesAddDate = dt;
    add_food_calories();
}

var getCalariesIdToAdd = function () {
    return calariesIdToAdd;
}

var getCalariesAddDate = function () {
    return calariesAddDate;
}

var setCaloriesAddDate = function (val) {
    calariesAddDate = val;
}

var addCaloryCatValue;
var setAddCaloryCatValue = function (val) {
    addCaloryCatValue = val;
}
var getCaloryCatValue = function () {
    return addCaloryCatValue;
}




///----------------


// //new food
var remove_food_calories;
var setRemoveFoodCalories = function (fn) {
    remove_food_calories = fn;
}


var caloriesIdToRem;
var caloriesRemDate;
var remCaloriesForDay = function (id, dt) {
    caloriesIdToRem = id;
    caloriesRemDate = dt;
    remove_food_calories();
}

var getCalariesIdToRem = function () {
    return caloriesIdToRem;
}

var getCalariesRemDate = function () {
    return caloriesRemDate;
}

var setCaloriesRemDate = function (val) {
    caloriesRemDate = val;
}


