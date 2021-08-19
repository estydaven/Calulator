let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clearBtns = document.querySelectorAll(".clear-btn"),
    decimalBtn = document.getElementById("decimal"),
    display = document.getElementById("display"),
    memory = 0,
    flag = false,
    memoryOperate = "";



for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener("click", function (e) {
        pressNumber(e.target.textContent);
    });
};

for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener("click", function (e) {
        pressOperation(e.target.textContent);
    });
};

for (let i = 0; i < clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener("click", function (e) {
        clear(e.target.textContent);
    });
};

decimalBtn.addEventListener("click", decimal);

function pressNumber(number) {
    if (flag) {
        display.value = number;
        flag = false;
    } else {
        if (display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        };
    };
};

function pressOperation(operate) {
    let memoryLocal = display.value;

    if (flag && memoryOperate !== "=") {
        display.value = memory;
    } else {
        flag = true;
        if (memoryOperate === "+") {
            memory += +memoryLocal;
        } else if (memoryOperate === "-") {
            memory -= +memoryLocal;
        } else if (memoryOperate === "*") {
            memory *= +memoryLocal;
        } else if (memoryOperate === "/") {
            memory /= +memoryLocal;
        } else {
            memory = +memoryLocal;
        }
        display.value = memory;
        memoryOperate = operate;
    };

}

function decimal() {
    let decimalMemory = display.value;

    if (flag) {
        decimalMemory = "0.";
        flag = false;
    } else {
        if (decimalMemory.indexOf(".") === -1) {
            decimalMemory += "."
        }
    };
    display.value = decimalMemory;
};

function clear(id) {
    if (id === "cl") {
        let value = display.value;
        value = value.slice(0, value.length - 1);
        display.value = value;
        flag = true;
    } else if (id === "c") {
        display.value = "0";
        flag = true;
        memory = 0,
        memoryOperate = "";
    }
};