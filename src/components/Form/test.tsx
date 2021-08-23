import { renderWithTheme } from 'utils/tests/helpers'

import { FormWrapper, FormLink, ForgotPassword } from '.'

describe('<Form />', () => {
  it('should render the Form', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
        <ForgotPassword>click me</ForgotPassword>
      </FormWrapper>
    )
    expect(container.parentElement).toMatchInlineSnapshot(`
.c0 .sc-jSFjdj {
  margin: 0.8rem 0;
}

.c0 .sc-gKAaRy {
  margin: 3.2rem auto 1.6rem;
}

.c1 {
  font-size: 1.4rem;
  color: #030517;
  text-align: center;
}

.c1 a {
  color: #3CD3C1;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 0.1rem solid #3CD3C1;
  -webkit-transition: color,border,0.1s ease-in-out;
  transition: color,border,0.1s ease-in-out;
}

.c1 a:hover {
  color: #29b3a3;
  border-bottom: 0.1rem solid #29b3a3;
}

.c2 {
  display: block;
  font-size: 1.4rem;
  color: #030517;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-align: right;
}

.c2:hover {
  color: #0f1971;
}

<body>
  <div>
    <div
      class="c0"
    >
      <div
        class="c1"
      >
        My nice 
        <a
          href="#"
        >
          link
        </a>
      </div>
      <a
        class="c2"
      >
        click me
      </a>
    </div>
  </div>
</body>
`)
  })
})
