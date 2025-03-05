function updateTime() {
    const timezone = document.getElementById('timezone').value;
    const now = new Date();
    const timeString = now.toLocaleTimeString('zh-CN', {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('time').textContent = timeString;
}

function getUserTimezone() {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return userTimezone;
}

function setDefaultTimezone() {
    const userTimezone = getUserTimezone();
    const timezoneSelect = document.getElementById('timezone');
    
    for (let option of timezoneSelect.options) {
        if (option.value === userTimezone) {
            timezoneSelect.value = userTimezone;
            break;
        }
    }
}

// 初始更新时间
setDefaultTimezone();
updateTime();

// 每秒更新一次时间
setInterval(updateTime, 1000);

// 监听时区选择变化
document.getElementById('timezone').addEventListener('change', updateTime); 