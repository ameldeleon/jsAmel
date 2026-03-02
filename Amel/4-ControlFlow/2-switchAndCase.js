let role;

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
} 

//Another way to write the same code without using switch statement

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');