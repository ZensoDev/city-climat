import{City} from "./components/city/city.component";
import{Climat} from "./components/climat/climat.component";
import{Temperature} from "./components/temperature/temperature.component";
import { Polution } from "./components/polution/polution.component";
import { Meteopolution } from "./components/meteopolution/meteopolution.component";
import { ApiOpenWeather } from "./models/apis/api-openweather.api.model";

import { Climat as ClimatModel } from "./models/climat.model";
import { Polution as PolutionModel } from "./models/polution.model";
import { City as CityModel } from "./models/city.model";
import { Temperature as TemperatureModel } from "./models/temperature.model";



let openWeather = new ApiOpenWeather("92ca15e469e17a4efada67662c31a78e jgjgjtj");

let cityModel = new CityModel(
    new PolutionModel,
    new ClimatModel(
    new TemperatureModel
    )
);


let meteopolution = new Meteopolution(
    new Climat,
    new Temperature,
    new Polution
);

let city = new City(cityModel, openWeather);
city.render();
meteopolution.render();