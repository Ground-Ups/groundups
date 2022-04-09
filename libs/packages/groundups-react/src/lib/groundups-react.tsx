import styles from './groundups-react.module.scss';

/* eslint-disable-next-line */
export interface GroundupsReactProps {}

export function GroundupsReact(props: GroundupsReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to GroundupsReact!</h1>
    </div>
  );
}

export default GroundupsReact;
