import { useState } from 'react';
import './UpdateMatch.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const UpdateMatch = () => {
    const [matchInfo, setMatchInfo] = useState(
        {
            
        }
    );

    return (
        <>
            <div className="update-match">
                <img src={require('../../assets/blank-avatar.jpg')} alt=''  />
                <input type='number' readOnly></input>
                <div className="info">
                    <div className="time">17 : 00</div>
                    <div className="location">Sân thông tin</div>
                </div>
                <input type='number' readOnly></input>
                <img src={require('../../assets/blank-avatar.jpg')} alt='' />
                <button className='confirm'>Xác nhận kết quả</button>
                <div className="status">Trạng thái: <span>conflict</span> </div>
            </div>
            <div className="input-match">
                <div className="input-div left">
                    <h1>FCB</h1>
                    <form action="">
                        <label htmlFor=".players-select">Chọn cầu thủ</label>
                        <select id='players-select'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <label htmlFor=".score-input">Ghi bàn phút</label>
                        <input type='number' id='score-input' placeholder='vd: 50' ></input>
                        <button className='confirm'>Xác nhận</button>
                    </form>
                </div>
                <div className="score-div">
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Eat</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Code</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Sleep</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>Repeat</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="input-div right">
                    <h1>REAL</h1>
                    <form action="">
                        <label htmlFor=".players-select">Chọn cầu thủ</label>
                        <select id='players-select'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <label htmlFor=".score-input">Ghi bàn phút</label>
                        <input type='number' id='score-input' placeholder='vd: 50' ></input>
                        <button className='confirm'>Xác nhận</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateMatch