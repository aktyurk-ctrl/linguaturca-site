import styles from './LivingSchool.module.css';
/** Map the approved semantic class names to locally scoped CSS module classes. */
export function cx(...names: (string | false | undefined)[]) {
  return names
    .filter(Boolean)
    .join(' ')
    .split(/\s+/)
    .map((name) => styles[name])
    .filter(Boolean)
    .join(' ');
}
