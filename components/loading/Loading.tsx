import React from 'react'
import { useLoading, Puff } from '@agney/react-loading';
import loadingStyles from "../../styles/Loading.module.scss"

const Loading = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="50" />,
        loaderProps: {
            // Any props here would be spread on to the indicator element.
            width:"30%",
          }
    });
return (
    <section {...containerProps} className={loadingStyles.loading}>
        {indicatorEl} {/* renders only while loading */}
    </section>
)
}

export default Loading
