class HomeTheaterFacade {
  amp: Amplifier;
  tuner: Tuner;
  player: StreamingPlayer;
  projector: Projector;
  lights: TheaterLights;
  screen: Screen;
  popper: PopcornPopper;

  constructor({ amp, tuner, player, projector, lights, screen, popper }) {
    this.amp = amp;
    this.tuner = tuner;
    this.player = player;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }

  //기타메소드
  watchMovie(movie: string) {
    console.log('영화 볼 준비중');
    this.popper.on();
    this.popper.pop();
    //..... 그밑으로 클래스 헬퍼
  }

  endMovie() {}
}
