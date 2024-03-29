import React, { useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { globalStyles } from '../styles/global';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { DateContext } from './Date-component';

//Author: Syed Bokhari
//Date: October 30th, 2022
//Summary: Front end functionality of the calendar screen. Allows user to select the date.
const CalendarScreen=({navigation})=>{
    const { date, setDate} = useContext(DateContext);    
    return (
<Calendar
  // Initially visible month. Default = now
  current={date.toDateString()}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined

  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  // Handler which gets executed on day press. Default = undefined
  onDayPress={day => {
    console.log('selected day', day);
    setDate(new Date((day.dateString)));
    navigation.navigate("Main Screen");
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  // Do not show days of other months in month page. Default = false
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={true}
  // Replace default month and year title with custom one. the function receive a date as parameter
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>

    );
}

export default CalendarScreen
