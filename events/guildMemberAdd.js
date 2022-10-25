module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        member.roles.add([
            '842069823696535582', // Spezial Ränge Placeholder
            '842060394520772709', // Spielmodi Placeholder
            '842068215105978429', // 4rena Custom Ranks Placeholder
            '717739834713702472', // 4rena
            '842058723862380575' // Camper
        ]);
    },
};