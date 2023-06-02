interface IBroker {
  subscribe(topic: string, subscriber: ISubscriber): void;
  unsubscribe(topic: string, subscriber: ISubscriber): void;
  publish(topic: string, measurements: IMeasurements): void;
}
interface ISubscriber {
  update(measurements: IMeasurements): void;
}
interface IDisplayElement {
  display(): void;
}
interface IMeasurements {
  temperature?: number;
  humidity?: number;
  pressure?: number;
}

class Broker {
  private subscribers: Map<string, ISubscriber[]>;

  constructor() {
    this.subscribers = new Map();
  }

  subscribe(topic: string, subscriber: ISubscriber) {
    if (!this.subscribers.has(topic)) {
      this.subscribers.set(topic, []);
    }
    this.subscribers.get(topic)!.push(subscriber);
  }

  unsubscribe(topic: string, subscriber: ISubscriber) {
    const subscribersList = this.subscribers.get(topic);
    if (!subscribersList) return;

    const index = subscribersList.indexOf(subscriber);
    if (index !== -1) subscribersList.splice(index, 1);
  }

  publish(topic: string, measurements: IMeasurements) {
    const subscribersList = this.subscribers.get(topic);
    if (!subscribersList) return;

    for (const subscriber of subscribersList) {
      subscriber.update(measurements);
    }
  }
}

class WeatherData {
  private broker: IBroker;

  constructor(broker: IBroker) {
    this.broker = broker;
  }

  setMeasurements(measurements: IMeasurements) {
    this.broker.publish('measurements', measurements);
  }
}

class CurrentConditionsDisplay implements ISubscriber, IDisplayElement {
  private temperature: number;
  private humidity: number;

  constructor(broker: IBroker) {
    broker.subscribe('measurements', this);
  }

  update({ temperature, humidity }: IMeasurements): void {
    if (temperature !== undefined) this.temperature = temperature;
    if (humidity !== undefined) this.humidity = humidity;

    this.display();
  }
  display() {
    console.log(`현재 상태: 온도 ${this.temperature}`);
    console.log(`현재 습도: ${this.humidity}`);
  }
}

const BASE_PRESSURE = 29.92;
class ForecastDisplay implements ISubscriber, IDisplayElement {
  private currentPressure: number = BASE_PRESSURE;
  private lastPressure: number;

  constructor(broker: IBroker) {
    broker.subscribe('measurements', this);
  }

  update({ pressure }: IMeasurements): void {
    if (pressure !== undefined) {
      this.lastPressure = this.currentPressure;
      this.currentPressure = pressure;
    }

    this.display();
  }

  display() {
    const message =
      this.currentPressure > this.lastPressure
        ? '날씨가 좋아지고 있습니다.'
        : this.currentPressure === this.lastPressure
        ? '지금과 비슷할 것 같습니다.'
        : '쌀쌀하며 비가 올 것 같습니다.';

    console.log(`기상 예보: ${message}`);
  }
}

const broker = new Broker();
const weatherData = new WeatherData(broker);
const currentConditionsDisplay = new CurrentConditionsDisplay(broker);
const forecastDisplay = new ForecastDisplay(broker);

weatherData.setMeasurements({
  temperature: 80,
  humidity: 65,
  pressure: 30.4,
});
weatherData.setMeasurements({
  temperature: 80,
  humidity: 65,
  pressure: 29.4,
});
