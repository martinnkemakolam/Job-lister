function List({click,imgSrc, company, newBol, featBol, position, postedAt, time, locate, specifics}) {
    let specificsSpan = specifics.map((index, id)=>{
        return <span key={id} onClick={()=>click(index)}>{index}</span>
    })
    return(
        <>
        <div className={featBol?'jobList active': 'jobList'}>
          <img src={imgSrc}></img>
          <div className='info'>
            <div className='top'>
              <span className='job'>{company}</span>
              {newBol ? <span className='new'>New!</span>: null}
              {featBol ? <span className='feature'>Feature</span>: null}
            </div>
            <div className='body'>
              <span className='jodDetail'>{position}</span>
              <div className='extraDetail'>
                <span>{postedAt}</span>
                <span>{time}</span>
                <span>{locate}</span>
              </div>
            </div>
          </div>
          <div className='specification'>
            {specificsSpan}
          </div>
        </div>
        </>
    )
}

export default List