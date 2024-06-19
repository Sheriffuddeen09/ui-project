const ProgressBar = () =>{

    return(
        
    <section className="sect">
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
        <div style={{
            display: 'inline-flex'
        }}>
            <p> Summary</p>
            <p style={{
            translate: '15px',
            backgroundColor: 'rgb(195, 195, 255)',
            width: '60px',
            paddingLeft: '4px',
            height: '18px',
            borderRadius: '5px'
        }}>Sales<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className="icons">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
      </p>
        </div>
        <div>
        <p style={{
            translate: '0px'
        }}> This Week<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className="icons">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
</p>
        </div>
        </div>
<div className="pro-flex">
    <div className="data">
    <p className="data">100k</p>
    <p className="data">80k</p>
    <p className="data">60k</p>
    <p className="data">40k</p>
    <p className="data">20k</p>
`</div>
<div className="bar">
        <div className="progress" data-percent="90%">
            <article style={{width: '90%'}}></article>
        </div>
        <div className="progress" data-percent="40%">
            <article style={{width: '40%'}}></article>
        </div>
        <div className="progress" data-percent="60%">
            <article style={{width: '60%'}}></article>
        </div>
        <div className="progress" data-percent="20%">
            <article style={{width: '20%'}}></article>
        </div>
        <div className="progress" data-percent="80%">
            <article style={{width: '80%'}}></article>
        </div>
        <div className="progress" data-percent="40%">
            <article style={{width: '40%'}}></article>
        </div>
        <div className="progress" data-percent="90%">
            <article style={{width: '90%'}}></article>
        </div>
</div>
</div>
<div className="cona">
    <p>sept 10</p>
    <p>sept 11</p>
    <p>sept 12</p>
    <p>sept 13</p>
    <p>sept 14</p>
    <p>sept 15</p>
    <p>sept 16</p>
`</div>
</section>

    )
}
export default ProgressBar