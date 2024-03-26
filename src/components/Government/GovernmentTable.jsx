import React from 'react'

const GovernmentTable = ({data, columns}) => {
  return (
    <div className='flex justify-center bg-[#F1BFBF] p-[5rem]'> 
      <table className='bg-white rounded-[30px]'>
        <thead>
          {columns === 2 && 
            <tr className='uppercase text-white py-5'>
                <th className='font-inter text-3xl bg-[#B00A0A] py-5 px-[150px] rounded-tl-[30px] '>
                  District</th>
                <th className='font-inter text-3xl bg-[#D65151] py-5 px-[200px] rounded-tr-[30px] '>
                  Board Members</th> 
            </tr> }
            {columns === 3 && 
            <tr className='uppercase text-white py-5'>
                <th className='font-inter text-3xl bg-[#B00A0A] py-5 px-[70px] rounded-tl-[30px] '>
                  District</th>
                <th className='font-inter text-3xl bg-[#D65151] py-5 px-[100px]'>
                  Board Members</th> 
                <th className='font-inter text-3xl bg-[#D65151] py-5 px-[100px] rounded-tr-[30px] '>
                  Telephone</th> 
            </tr> }
        </thead> 
        {columns === 2 && 
        <tbody>
          {(data.map((member, index) =>{
            return <tr className='text-center'>
              <td className='py-5 font-inter font-semibold'>{member.district}</td> 
              <td className='py-5 font-inter'> 
                {member.members.map((boardM, i) => (
                  <React.Fragment key={i}>
                    {boardM} 
                    {i < member.members.length - 1 && <br />}
                  </React.Fragment>
                ))} 
              </td>
              </tr> 
            })) }
          </tbody>}
          {columns === 3 && 
        <tbody>
          {(data.map((item, index) =>{
            return <tr className='text-center'>
              <td className='py-5 font-inter font-semibold px-5'>
              {item.name.map((name, i) => (
                <React.Fragment key={i}>
                  {name} 
                  {i < item.name.length - 1 && <br />}
                </React.Fragment> 
              ))}</td> 
              <td className='py-5 font-inter'>{item.member}</td>
              <td className='py-5 font-inter'>
              {item.phone.map((phone, i) => (
                <React.Fragment key={i}>
                  {phone} 
                  {i < item.phone.length - 1 && <br />}
                </React.Fragment> 
              ))}
              </td> 
              </tr>  
            })) }
          </tbody>}
      </table>
    </div>
  )
}

export default GovernmentTable
