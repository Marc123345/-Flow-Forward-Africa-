
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (                
                <a href="#top" className="scroll-to-target scroll-to-top" aria-label="Back to top">
                    <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner"></span></span>
                </a>
            )}
        </>
    )
}