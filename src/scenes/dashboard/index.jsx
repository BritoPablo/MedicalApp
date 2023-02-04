import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import MainLayout from "../../layouts/MainLayout"


export const Dashboard = () => {
  return (
    <MainLayout>
      <Card sx={{ width: '90%' }}>
        <CardMedia
        component="img"
        height="auto"
        image="../assets/images/backGrounds/fondoLogSing.png"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      </Card>
    </MainLayout>
  )
}
