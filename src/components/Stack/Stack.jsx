import classes from './Stack.module.css';

export default function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  // children,
  vertical = false,
  ...restProps /* { children: <h2></h2> } */
}) {
  const classNames = `${classes.Stack} ${customClassNames}`.trim();

  console.log(vertical)

  return <Component className={classNames} {...restProps} />;

  // return <Component>{children}</Component>;
}