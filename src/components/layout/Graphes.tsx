import { PieChart } from '../visualization/PieChart';
import styles from './Graphes.module.scss';

export const Graphes = () => {

    const data = [
        {
          "id": "php",
          "label": "php",
          "value": 403,
          "color": "hsl(78, 70%, 50%)"
        },
        {
          "id": "erlang",
          "label": "erlang",
          "value": 173,
          "color": "hsl(96, 70%, 50%)"
        },
        {
          "id": "css",
          "label": "css",
          "value": 577,
          "color": "hsl(351, 70%, 50%)"
        },
        {
          "id": "sass",
          "label": "sass",
          "value": 412,
          "color": "hsl(45, 70%, 50%)"
        },
        {
          "id": "javascript",
          "label": "javascript",
          "value": 441,
          "color": "hsl(222, 70%, 50%)"
        },
        {
          "id": "rust",
          "label": "rust",
          "value": 66,
          "color": "hsl(321, 70%, 50%)"
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 11,
          "color": "hsl(208, 70%, 50%)"
        },
        {
          "id": "lisp",
          "label": "lisp",
          "value": 453,
          "color": "hsl(65, 70%, 50%)"
        },
        {
          "id": "elixir",
          "label": "elixir",
          "value": 255,
          "color": "hsl(138, 70%, 50%)"
        },
        {
          "id": "c",
          "label": "c",
          "value": 440,
          "color": "hsl(357, 70%, 50%)"
        },
        {
          "id": "go",
          "label": "go",
          "value": 323,
          "color": "hsl(339, 70%, 50%)"
        },
        {
          "id": "ruby",
          "label": "ruby",
          "value": 222,
          "color": "hsl(330, 70%, 50%)"
        },
        {
          "id": "python",
          "label": "python",
          "value": 403,
          "color": "hsl(90, 70%, 50%)"
        },
        {
          "id": "haskell",
          "label": "haskell",
          "value": 301,
          "color": "hsl(44, 70%, 50%)"
        },
        {
          "id": "scala",
          "label": "scala",
          "value": 530,
          "color": "hsl(20, 70%, 50%)"
        },
        {
          "id": "make",
          "label": "make",
          "value": 489,
          "color": "hsl(158, 70%, 50%)"
        },
        {
          "id": "java",
          "label": "java",
          "value": 427,
          "color": "hsl(2, 70%, 50%)"
        },
        {
          "id": "hack",
          "label": "hack",
          "value": 278,
          "color": "hsl(340, 70%, 50%)"
        }
      ]

    return (
        <div className={styles.container}>
            <PieChart data={data} />
            <PieChart data={data} />
            <PieChart data={data} />
            <PieChart data={data} />
        </div>
    )
}