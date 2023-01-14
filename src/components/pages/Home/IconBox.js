import React from 'react';
import img1 from '../../../asset/counter/success.png'
import img2 from '../../../asset/counter/contract.png'
import img3 from '../../../asset/counter/lawyer.png'
import banner from '../../../asset/banner/inner_background_01.jpg'

const IconBox = () => {
    const boxes = [
        {
            img:img1,
            id:11202,
            title:`Professinal Service`,
            text:`Mr. Jhon metha has been practicing law since 1967. He is listed in Best Lawyers in America and has an AV rating with the Bar Registry of Preeminent Lawyers. So you will the best services for sure. `
        },
        {
            img:img2,
            id:11302,
            title:`Quick & Positive Result`,
            text:`We provided quick services based on cases. Our customer is our first priority. We try to solve the case as early as possible and bring the desire result`
        },
        {
            img:img3,
            id:11402,
            title:`Top Legal Expert`,
            text:`Mr.Jhon metha is One of the top leagal expert on family law. He handle more than 200 cases and the success rate is 90%.`
        },

    ]
    return (
        <div  className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-8 lg:py-20 border border-khaki rounded bg-cover bg-no-repeat  shadow-2xl" style={{backgroundImage:`url(${banner})`,backgroundColor:'rgb(0 0 0 / 35%)',backgroundBlendMode:'overlay'}}>
            
            <div className="grid  gap-8 md:grid-cols-3">
                {
                    boxes.map((box,i)=><div key={box.id} className={`flex items-start px-5  ${i===boxes.length-1?'md:border-none':'md:border-r'} border-khaki`}>
                    <img
                      className="h-10 mr-4  shadow"
                      src={box.img}
                      alt="Person"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-2xl mb-3 font-Bellefair text-white">{box.title}</p>
                      <p className="text-sm text-white">{box.text}</p>
                    </div>
                  </div>)
                }
            
        </div>
        </div>
    );
};

export default IconBox;