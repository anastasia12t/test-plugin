const { exec } = require("child_process");

exec("calc", (error) => {
  if (error) {
    console.error("Не удалось открыть калькулятор:", error.message);
  }
});
