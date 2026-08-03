// export default function LandingPage(){
//   return <div>Login Page</div>;
// }
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import {
    Box,
    Container,
    Typography,
    Paper,

    Grid,
    Button,
    Stack
} from "@mui/material";

function LandingPage()
{
    const aiTools = [
    {
        title: "التنبؤ بأمراض الكبد",
        description:
        "اكتشف احتمالية الإصابة بأمراض الكبد باستخدام نموذج تعلم آلي مدرب بدقة.",
        path: "/liver-prediction",
    },
        {
            title: "التنبؤ بأمراض الكبد",
            description:
            "اكتشف احتمالية الإصابة بأمراض الكبد باستخدام نموذج تعلم آلي مدرب بدقة.",
            path: "/liver-prediction",
        }
];

    const features = [
        {
        icon: <MonitorHeartIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "تتبع الصحة اليومي",
        desc: "سجل قياسات الضغط والسكر ونبضات القلب يوميًا.",
        },
        {
        icon: <BarChartIcon sx={{ fontSize: 50, color: "green" }} />,
        title: "تقارير وإحصائيات",
        desc: "مخططات شهرية وتقارير قابلة للتحميل PDF.",
        },
        {
        icon: <EventIcon sx={{ fontSize: 50, color: "purple" }} />,
        title: "حجز المواعيد",
        desc: "ابحث عن الأطباء واحجز مواعيدك بسهولة.",
        },
        {
        icon: <PersonIcon sx={{ fontSize: 50, color: "orange" }} />,
        title: "ملف الطبيب الشامل",
        desc: "إدارة الملف الشخصي والأسعار والمواعيد المتاحة.",
        },
        {
        icon: <FavoriteIcon sx={{ fontSize: 50, color: "red" }} />,
        title: "تنبيهات ذكية",
        desc: "تنبيهات فورية للأطباء عند وجود قراءات حرجة.",
        },
        {
        icon: <MonitorHeartIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "متابعة شاملة",
        desc: "متابعة حالة المرضى وإدارة المواعيد بفعالية.",
        },
        {
        icon: <PsychologyIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "التنبؤ سريعا بالمرض",
        desc: "يمكنك التنبؤ ببعض الامراض بسرعة وسهولة باستخدام نموذج تعلم آلي مدرب بدقة.",
        },
    ];
    return(
        <>
        <Box
    sx={{
        backgroundColor: "white",
        minHeight: "10vh",
        borderBottom: "2px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        gap: 2, // padding في الاتجاهين بدل pr/pl
    }}
    >
    <Typography
        variant="h4"
        sx={{
        display: "flex",
        alignItems: "center",
        color: "black",
        }}
    >
        <FavoriteBorderIcon
        sx={{
            fontSize: 30,
            color: "blue",
            mr: 1,
            verticalAlign: "middle",
        }}
        />
        صحتي
    </Typography>
    <Button
        variant="contained"
        component={Link}
        to="/login"
    >
        تسجيل الدخول
    </Button>
    </Box>
    <Box
    sx={{
        backgroundColor: "#f0f9ffff",
        minHeight: "40vh",
        display: "flex",
        justifyContent: "space-between",
    }}
    >
        <Container maxWidth="sm">
            <Typography variant="h3" align="center" sx={{ pt: 8,fontSize:65 }}>
                منصة إدارة الصحة الذكية
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ mb: 3,fontSize:20 }}>
تتبع صحتك اليومية، احجز مواعيد مع أفضل الأطباء، واحصل على تقارير طبية شاملة
            </Typography>
            <Stack spacing={2} direction="row" sx={{justifyContent: "center"}}>
                    <Button variant="contained" component={Link} to="/login"  size="large" sx={{ fontSize:20 }}>انضم كطبيب</Button>
                    <Button variant="outlined" component={Link} to="/login"  size="large" sx={{ fontSize:20 }}>ابدا كمريض</Button>
            </Stack>
        </Container>
    </Box>
    <Box
    sx={{
        py: 10,
        background: "linear-gradient(180deg,#ffffff,#eef7ff)",
    }}
    >
    <Container maxWidth="lg">
        <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ mb: 2 }}
        >
        🧠 أدوات الذكاء الاصطناعي
        </Typography>

        <Typography
        align="center"
        color="text.secondary"
        sx={{
            mb: 7,
            fontSize: 18,
        }}
        >
        استكشف أدواتنا الطبية المعتمدة على الذكاء الاصطناعي لمساعدتك في التنبؤ بالأمراض بسهولة.
        </Typography>

        <Grid container justifyContent="center" spacing={4}>
        {aiTools.map((tool, index) => (
            <Grid item xs={12} sm={10} md={6} lg={5} key={index}>
            <Card
                sx={{
                borderRadius: 5,
                p: 2,
                height: "100%",
                border: "1px solid #E3F2FD",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                transition: ".35s",

                "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 45px rgba(25,118,210,.25)",
                },
                }}
            >
                <CardContent sx={{ textAlign: "center" }}>
                <Box
                    sx={{
                    width: 85,
                    height: 85,
                    borderRadius: "50%",
                    background: "#E3F2FD",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    mb: 3,
                    }}
                >
                    <PsychologyIcon
                    sx={{
                        fontSize: 48,
                        color: "#1976d2",
                    }}
                    />
                </Box>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                >
                    {tool.title}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    }}
                >
                    {tool.description}
                </Typography>

                <Box
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    mb: 4,
                    }}
                >
                    <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                    }}
                    >
                    <CheckCircleOutlineIcon color="success" />
                    نتيجة فورية خلال ثوانٍ
                    </Typography>

                    <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                    }}
                    >
                    <CheckCircleOutlineIcon color="success" />
                    يعتمد على نموذج تعلم آلي مدرب
                    </Typography>

                    <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                    }}
                    >
                    <CheckCircleOutlineIcon color="success" />
                    لا يتطلب تسجيل الدخول
                    </Typography>
                </Box>

                <Button
                    component={Link}
                    to={tool.path}
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                    borderRadius: 3,
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: 17,
                    }}
                >
                    ابدأ التنبؤ
                </Button>
                </CardContent>
            </Card>
            </Grid>
        ))}
        </Grid>
    </Container>
</Box>
    <Box   sx={{
        backgroundColor: "#ffffffff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
            }}
    >
        <Container maxWidth="lg">
            <Typography variant="h4" align="center" sx={{ pt: 12 }}>
                        مميزات المنصة
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{  pt:1,fontSize:20 }}>
                    كل ما تحتاجه لإدارة صحتك في مكان واحد
            </Typography>
                <Box sx={{ flexGrow: 1, p: 5 }}>
        <Grid container spacing={3} justifyContent="center">
            {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                elevation={3}
                sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 4,
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
                >
                {feature.icon}
                <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                    {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                    {feature.desc}
                </Typography>
                </Paper>
            </Grid>
            ))}
        </Grid>
        </Box>
    </Container>
    </Box>
    <Box sx={{backgroundColor: "#111010ff" ,minHeight: "20vh"}}
    >
        <Typography variant="h4" align="center" sx={{ pt: 3,color:"white" }}>
            <span style={{ color: "blue", fontSize: 50 }}>
                <FavoriteBorderIcon
                sx={{ fontSize: 50, verticalAlign: "middle" }}
                />
            </span>{" "}
            صحتي
            </Typography>

            <Typography variant="subtitle1" align="center" sx={{ mb: 3,color:"white" }}>
            منصة إدارة الصحة الذكية - جميع الحقوق محفوظة 2024
            </Typography>

    </Box>
        </>
    );
}
export default LandingPage;