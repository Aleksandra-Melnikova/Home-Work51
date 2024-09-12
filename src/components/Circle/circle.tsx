import './circle.css';
import * as React from 'react';

interface Props {
    numberOfCircle: number;
}

const Circle: React.FC<Props> = ({numberOfCircle}) => {
    return (
        <div className="circle">
            {numberOfCircle}
        </div>
    );
};

export default Circle;