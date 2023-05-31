class WeatherData {
  private _temperature: number;
  private _humidity: number;
  private _pressure: number;

  get temperature() {
    return this._temperature;
  }
  get humidity() {
    return this._humidity;
  }
  get pressure() {
    return this._pressure;
  }

  measurementsChanged() {
    // 온도 습도 기압의 값이 갱신될 때 호출
    // 디스플레이 업데이트 코드 넣으면 됨.

    const temperature = this.temperature;
    const humidity = this.humidity;
    const pressure = this.pressure;

    currentConditionsDisplay.update(temperature, humidity, pressure);
    statisticsDisplay.update(temperature, humidity, pressure);
    forecastDisplay.update(temperature, humidity, pressure);
  }
}
