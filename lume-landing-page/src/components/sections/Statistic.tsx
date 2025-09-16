function Statistic(){
    return (
        <div className="relative flex justify-center items-center p-30">
            {/* glow effect again*/}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className = "flex flex-col space-y-4">
                <h1 className="relative z-10 text-4xl md:text-5xl bg-white/10 backdrop-blur-md rounded-3xl max-w-4xl">
                    The average Gen-Z person spends 7 hours of screen time a day — that's a significant chunk of your life!
                </h1>
                <h1>- some source</h1>
            </div>
   
        </div>
    )
}

export default Statistic
