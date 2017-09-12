export class Event {
constructor(
  //TODO::set date with zero time 
  public desc: string = '',
  public time: any = {minute: new Date().getMinutes(), hour: new Date().getHours()},
  public moment?: any,
  public period?: number,
  public timeOfDay?: number
){}
}
