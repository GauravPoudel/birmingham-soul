import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Clock,
  Users,
  MapPin,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { format, addDays, isSameDay } from "date-fns";
import { classes, instructors } from "@/data/classes";
import { toast } from "@/hooks/use-toast";

// Generate schedule for demo purposes
const generateSchedule = (date: Date) => {
  const dayOfWeek = date.getDay();
  const scheduleTemplates = [
    { time: "07:00", classId: "grounding", spots: 12 },
    { time: "09:00", classId: "hip-openers", spots: 8 },
    { time: "11:00", classId: "office-reset", spots: 15 },
    { time: "13:00", classId: "self-love", spots: 6 },
    { time: "17:00", classId: "backbends", spots: 10 },
    { time: "18:30", classId: "forest-flow", spots: 4 },
    { time: "20:00", classId: "letting-go", spots: 9 },
  ];

  // Vary schedule by day
  const startIndex = dayOfWeek % 3;
  const selectedClasses = scheduleTemplates.slice(
    startIndex,
    startIndex + 5
  );

  return selectedClasses.map((item) => ({
    ...item,
    class: classes.find((c) => c.id === item.classId)!,
  }));
};

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [instructorFilter, setInstructorFilter] = useState<string>("All");
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const schedule = generateSchedule(selectedDate);

  const filteredSchedule = schedule.filter((item) => {
    const categoryMatch =
      categoryFilter === "All" || item.class.category === categoryFilter;
    const instructorMatch =
      instructorFilter === "All" || item.class.instructor === instructorFilter;
    return categoryMatch && instructorMatch;
  });

  const handleBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: `You've booked ${
        classes.find((c) => c.id === selectedClass)?.title
      } on ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}`,
    });
    setIsDialogOpen(false);
    setBookingStep(1);
    setSelectedClass(null);
    setSelectedTime(null);
  };

  // Quick date selection
  const quickDates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-earth">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4 animate-fade-up opacity-0">
              Book a Session
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up opacity-0 stagger-1">
              Reserve Your
              <br />
              <span className="text-primary italic">Sacred Space</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up opacity-0 stagger-2">
              Choose your class, select your time, and begin your journey toward
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Booking System */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Calendar & Filters */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Date Selection */}
              <div className="bg-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  Select Date
                </h3>
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  {quickDates.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "flex flex-col items-center px-4 py-3 rounded-xl min-w-[60px] transition-all duration-300",
                        isSameDay(selectedDate, date)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      )}
                    >
                      <span className="text-xs font-medium">
                        {format(date, "EEE")}
                      </span>
                      <span className="text-lg font-semibold">
                        {format(date, "d")}
                      </span>
                    </button>
                  ))}
                </div>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border pointer-events-auto"
                  disabled={(date) => date < new Date()}
                />
              </div>

              {/* Filters */}
              <div className="bg-card rounded-2xl p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Filter Classes
                </h3>
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm text-muted-foreground mb-1.5 block">
                      Category
                    </Label>
                    <Select
                      value={categoryFilter}
                      onValueChange={setCategoryFilter}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Physical Focus">
                          Physical Focus
                        </SelectItem>
                        <SelectItem value="Inner Intentions">
                          Inner Intentions
                        </SelectItem>
                        <SelectItem value="Philosophical & Spiritual">
                          Philosophical & Spiritual
                        </SelectItem>
                        <SelectItem value="Nature-Inspired">
                          Nature-Inspired
                        </SelectItem>
                        <SelectItem value="Modern Wellness">
                          Modern Wellness
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground mb-1.5 block">
                      Instructor
                    </Label>
                    <Select
                      value={instructorFilter}
                      onValueChange={setInstructorFilter}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Instructors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Instructors</SelectItem>
                        {instructors.map((instructor) => (
                          <SelectItem
                            key={instructor.id}
                            value={instructor.name}
                          >
                            {instructor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Studio Info */}
              <div className="bg-sage-light rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sage-dark mt-0.5" />
                  <div>
                    <p className="font-medium text-sage-dark">Studio Location</p>
                    <p className="text-sm text-sage-dark/70">
                      42 Zen Lane, Jewellery Quarter
                      <br />
                      Birmingham B3 1JQ, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Schedule */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Available Classes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {format(selectedDate, "EEEE, MMMM d, yyyy")}
                  </p>
                </div>

                {filteredSchedule.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No classes match your filters for this date.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setCategoryFilter("All");
                        setInstructorFilter("All");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredSchedule.map((item) => (
                      <div
                        key={`${item.classId}-${item.time}`}
                        className={cn(
                          "border rounded-xl p-5 transition-all duration-300",
                          selectedClass === item.classId &&
                            selectedTime === item.time
                            ? "border-primary bg-sage-light"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            {/* Time */}
                            <div className="text-center min-w-[60px]">
                              <p className="font-heading text-xl font-semibold text-foreground">
                                {item.time}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {item.class.duration} min
                              </p>
                            </div>

                            {/* Class Info */}
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-heading text-lg font-semibold text-foreground">
                                  {item.class.title}
                                </h4>
                                <span className="px-2 py-0.5 rounded-full bg-sage-light text-sage-dark text-xs">
                                  {item.class.level}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                {item.class.category} • with{" "}
                                {item.class.instructor}
                              </p>
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="w-3.5 h-3.5" />
                                  {item.class.duration} min
                                </span>
                                <span className="flex items-center gap-1 text-xs text-primary">
                                  <Users className="w-3.5 h-3.5" />
                                  {item.spots} spots left
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Book Button */}
                          <Dialog
                            open={
                              isDialogOpen &&
                              selectedClass === item.classId &&
                              selectedTime === item.time
                            }
                            onOpenChange={(open) => {
                              setIsDialogOpen(open);
                              if (!open) {
                                setBookingStep(1);
                              }
                            }}
                          >
                            <DialogTrigger asChild>
                              <Button
                                variant={
                                  selectedClass === item.classId &&
                                  selectedTime === item.time
                                    ? "sage"
                                    : "outline"
                                }
                                size="lg"
                                onClick={() => {
                                  setSelectedClass(item.classId);
                                  setSelectedTime(item.time);
                                  setIsDialogOpen(true);
                                }}
                              >
                                Book Now
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                              <DialogHeader>
                                <DialogTitle className="font-heading text-2xl">
                                  {bookingStep === 1
                                    ? "Confirm Your Booking"
                                    : bookingStep === 2
                                    ? "Your Details"
                                    : "Booking Complete"}
                                </DialogTitle>
                                <DialogDescription>
                                  {bookingStep === 1
                                    ? "Review your class selection"
                                    : bookingStep === 2
                                    ? "Enter your details to complete booking"
                                    : "Your spot has been reserved"}
                                </DialogDescription>
                              </DialogHeader>

                              {bookingStep === 1 && (
                                <div className="space-y-6 py-4">
                                  <div className="bg-muted rounded-xl p-4 space-y-3">
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">
                                        Class
                                      </span>
                                      <span className="font-medium">
                                        {item.class.title}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">
                                        Date
                                      </span>
                                      <span className="font-medium">
                                        {format(
                                          selectedDate,
                                          "EEEE, MMMM d, yyyy"
                                        )}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">
                                        Time
                                      </span>
                                      <span className="font-medium">
                                        {item.time}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">
                                        Duration
                                      </span>
                                      <span className="font-medium">
                                        {item.class.duration} minutes
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-muted-foreground">
                                        Instructor
                                      </span>
                                      <span className="font-medium">
                                        {item.class.instructor}
                                      </span>
                                    </div>
                                  </div>
                                  <Button
                                    className="w-full"
                                    variant="hero"
                                    onClick={() => setBookingStep(2)}
                                  >
                                    Continue
                                  </Button>
                                </div>
                              )}

                              {bookingStep === 2 && (
                                <div className="space-y-6 py-4">
                                  <div className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="firstName">
                                          First Name
                                        </Label>
                                        <Input
                                          id="firstName"
                                          placeholder="Maya"
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label htmlFor="lastName">
                                          Last Name
                                        </Label>
                                        <Input
                                          id="lastName"
                                          placeholder="Chen"
                                        />
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="email">Email</Label>
                                      <Input
                                        id="email"
                                        type="email"
                                        placeholder="maya@example.com"
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="phone">
                                        Phone (optional)
                                      </Label>
                                      <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="+44 121 123 4567"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex gap-3">
                                    <Button
                                      variant="outline"
                                      className="flex-1"
                                      onClick={() => setBookingStep(1)}
                                    >
                                      Back
                                    </Button>
                                    <Button
                                      variant="hero"
                                      className="flex-1"
                                      onClick={handleBooking}
                                    >
                                      Confirm Booking
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
