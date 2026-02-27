import { mount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders the provided message', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Jest' },
    })

    expect(wrapper.text()).toContain('Hello Jest')
  })
})
