import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./index.module.scss";

interface Props {
    cols: number;
    rows: number;
}

export function GridPoints( { cols, rows, ...props}:Props & HTMLAttributes<HTMLDivElement>){

    const xArray = Array(rows).fill(0);
    const yArray= Array(cols).fill(0);

    return <div 
    {...props} 
    className={classNames(styles.grid, props.className ||"")}
    style={{
        ...props.style,
        '--grid-x': rows,
        '--grid-y': cols
    } as any}>
        {
            xArray.map((x, xi) => {
                return <div key={`grid-row-${xi}`} className={styles.row}>
                    {
                        yArray.map((y,yi) => {
                            return <div key={`grid-col-${yi}`} className={styles.col}>
                                <span data-row={xi} data-col={yi} className={styles.point}></span>
                            </div>
                        })
                    }
                </div>
            })
        }
    </div>
}