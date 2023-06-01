interface ISubject {
  registerObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
}
interface IObserver {
  update(): void;
}
interface IDisplayElement {
  display(): void;
}

class WeatherData implements ISubject {
  private observers: IObserver[];
  private _temperature: number;
  private _humidity: number;
  private _pressure: number;

  constructor() {
    this.observers = [];
  }

  get temperature() {
    return this._temperature;
  }
  get humidity() {
    return this._humidity;
  }
  get pressure() {
    return this._pressure;
  }

  registerObserver(observer: IObserver) {
    this.observers.push(observer);
  }
  removeObserver(observer: IObserver) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) this.observers.splice(index, 1);
  }
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  messurementChanged() {
    this.notifyObservers();
  }

  setMessurements(temperature: number, humidity: number, pressure: number) {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;

    this.messurementChanged();
  }
}

class CurrentConditionsDisplay implements IObserver, IDisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update() {
    this.temperature = this.weatherData.temperature;
    this.humidity = this.weatherData.humidity;
    this.display();
  }
  display() {
    console.log(`현재 상태: 온도 ${this.temperature}`);
    console.log(`현재 습도: ${this.humidity}`);
  }
}

const BASE_PRESSURE = 29.92;
class ForecastDisplay implements IObserver, IDisplayElement {
  private cureentPressure: number = BASE_PRESSURE;
  private lastPressure: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }
  update() {
    this.lastPressure = this.cureentPressure;
    this.cureentPressure = this.weatherData.pressure;
    this.display();
  }
  display() {
    const message =
      this.cureentPressure > this.lastPressure
        ? '날씨가 좋아지고 있습니다.'
        : this.cureentPressure === this.lastPressure
        ? '지금과 비슷할 것 같습니다.'
        : '쌀쌀하며 비가 올 것 같습니다.';

    console.log(`기상 예보: ${message}`);
  }
}

const weatherData = new WeatherData();
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);
weatherData.setMessurements(80, 65, 30.4);
