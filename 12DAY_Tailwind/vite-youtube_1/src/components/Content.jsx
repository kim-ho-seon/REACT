const Content = ({content}) => {
    return (
        <section className="w-[50%] h-auto p-[10px]">
            <img src={content.img} className="w-full rounded-[10px]" />
            <div className="flex flex-row gap-[10px] pt-[10px]" >
                <div>
                    <img className="w-[30px] rounded-full" src={content.profile} />
                </div>
                <div>
                    <p className="font-[600]">{content.title}</p>
                    <p className="text-[0.9rem] text-[gray]">{content.creator}</p>
                </div>
            </div>
        </section>
    )
}

export default Content