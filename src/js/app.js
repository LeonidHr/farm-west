import * as functions  from "./files/functions.js";
import * as forms from "./files/forms.js";

functions.isWebp();
functions.ibg();

// Динамичесский адаптив
import "./files/dynamic_adapt.js";

//меню бургер
functions.menuInit();

//работа с формой
forms.formInit();

//споллеры
functions.spollers();

//Паралакс
import "./files/parallax-mouse.js";
import "./files/rellax.js";

//Подключение своего кода
import "./files/script.js";

