import { Element } from '../../src/index';
import Box from './box';

export default class Test extends Element {
  constructor(config: any) {
    super(config);
    this.childMap = {
      box1: new Box({ width: 100, height: 100 }),
    };
    this.state = {
      boxColor: 'blue',
    };

    setTimeout(() => {
      this.state.boxColor = 'red';
    }, 2000);
  }

  created() {
    this.setState({
      boxColor: 'dark',
    });
  }

  paint({ context: ctx, props, state, childs }: Element) {
    console.log('wrapper', props);
    const { box1 } = childs;
    const { boxColor } = state;

    ctx.fillStyle = '#ddd';
    ctx.fillRect(0, 0, 300, 300);

    box1({
      a: 1,
      b: 2,
      color: boxColor,
    })
      .paste({
        x: 10,
        y: 10,
      });
  }
}