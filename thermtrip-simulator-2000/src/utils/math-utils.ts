export default class MathUtils {
    public static randomBeetween(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}