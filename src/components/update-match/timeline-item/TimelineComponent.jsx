import React, { useState } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import axios from "axios";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const TimelineComponent = ({ time, isTeam1, isCaptainTeam1, memberId, deleteMatchRecord }) => {
    const [currentMemberName, setCurrentMemberName] = useState();

    const getMemberName = async () => {
        const response = await axios.get(`/user/view-information/${memberId}`);
        setCurrentMemberName(response.data?.user?.name);
    };

    getMemberName();

    return (
        <div className="timeline-item">
            <TimelineItem position={isTeam1 ? "left" : "right"}>
                <TimelineSeparator>
                    <SportsSoccerIcon sx={{marginBottom: '3px', marginTop: '3px'}} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    {time}' - {currentMemberName}
                    {
                        isTeam1 === isCaptainTeam1 &&
                        <button 
                            onClick={(e) => deleteMatchRecord()}
                            style={{
                                color: 'red',
                                width: '1rem',
                                border: '1px solid black',
                                backgroundColor: 'white', 
                                cursor: 'pointer',
                                marginLeft: '10px'
                            }}
                        >
                            X
                        </button>
                    }
                </TimelineContent>
            </TimelineItem>
        </div>
    );
};

export default TimelineComponent;
