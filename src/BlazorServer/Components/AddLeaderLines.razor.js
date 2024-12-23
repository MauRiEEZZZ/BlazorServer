export function addLine(startId, endId, options) {
    new LeaderLine(
        document.getElementById(startId),
        document.getElementById(endId),
        options
    );
} 