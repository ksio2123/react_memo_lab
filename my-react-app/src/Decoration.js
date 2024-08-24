import React from 'react';
function Decoration() {
    console.log('i got rendered');
    return (
      <div className="decoration">
        ⛵️
      </div>
    );
  }
  
export default Decoration = React.memo(Decoration);
// export default Decoration;